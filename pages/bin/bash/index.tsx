import type { NextPage } from 'next';
import { CommandLine } from '../../../components/Terminal/CommandLine/CommandLine';
import { TerminalHelperBox } from '../../../components/Terminal/CommandLineArt/TerminalHelperBox';

const BinBashPage: NextPage = () => {
  return (
    <>
      <TerminalHelperBox />
      <CommandLine />
    </>
  );
};

export default BinBashPage;
