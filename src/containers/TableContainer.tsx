import { Filter } from '../components/filter/Filter';
import { Table } from '../components/table/Table';

export const TableContainer = () => (
  <div className="main-dashboard">
    <Filter />
    {/* TODO move to component */}
    <header className="header">
      <nav className="nav"><a className="is-active" href="#">List </a><a href="#">Map </a><a href="#">Bar </a><a href="#">Graph </a><a href="#">Line </a></nav>
      <div className="tools"><i className="icn icn--save"></i><i className="icn icn--voice"></i><i className="icn icn--downlod"></i></div>
    </header>
    <Table />
  </div>
)