from argparse import Namespace
from logging import Logger
from pathlib import Path
from typing import Callable, List, Optional

from protostar.cli import ProtostarArgument, ProtostarCommand
from protostar.cli.map_targets_to_file_paths import map_targets_to_file_paths
from protostar.formatter.formatter import Formatter
from protostar.formatter.formatting_result import (
    FormattingResult,
    format_formatting_result,
)
from protostar.formatter.formatting_summary import FormattingSummary, format_summary
from protostar.protostar_exception import ProtostarExceptionSilent


class FormatCommand(ProtostarCommand):
    def __init__(self, project_root_path: Path, logger: Logger) -> None:
        super().__init__()
        self._formatter = Formatter(project_root_path)
        self._logger = logger

    @property
    def example(self) -> Optional[str]:
        return "$ protostar format"

    @property
    def name(self) -> str:
        return "format"

    @property
    def description(self) -> str:
        return "Format Cairo source code."

    @property
    def arguments(self):
        return [
            ProtostarArgument(
                name="target",
                description=("Target to format, can be a file or a directory."),
                type="str",
                is_array=True,
                is_positional=True,
                default=["."],
            ),
            ProtostarArgument(
                name="check",
                description=(
                    "Run in 'check' mode. Exits with 0 if input is formatted correctly."
                    "Exits with 1 if formatting is required."
                ),
                type="bool",
                is_required=False,
                default=False,
                short_name="c",
            ),
            ProtostarArgument(
                name="verbose",
                description=("Log information about already formatted files as well."),
                type="bool",
                is_required=False,
                default=False,
            ),
            ProtostarArgument(
                name="ignore-broken",
                description=("Ignore broken files."),
                type="bool",
                is_required=False,
                default=False,
            ),
        ]

    async def run(self, args: Namespace):
        summary = self.format(
            targets=args.target,
            check=args.check,
            verbose=args.verbose,
            ignore_broken=args.ignore_broken,
        )

        if summary.get_file_count() == 0:
            self._logger.warn("No files found")
        else:
            self._logger.info(format_summary(summary, args.check))

        # set exit code to 1
        if summary.any_unformatted_or_broken(args.check):
            raise ProtostarExceptionSilent(
                "Some files were unformatted, impossible to format or broken."
            )

    def format(
        self,
        targets: List[str],
        check: bool = False,
        verbose: bool = False,
        ignore_broken: bool = False,
    ) -> FormattingSummary:

        callback: Callable[[FormattingResult], None] = lambda result: print(
            format_formatting_result(result, check)
        )

        summary = self._formatter.format(
            file_paths=map_targets_to_file_paths(targets),
            check=check,
            verbose=verbose,
            ignore_broken=ignore_broken,
            on_formatting_result=callback,
        )

        return summary
