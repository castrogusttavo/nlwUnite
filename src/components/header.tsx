// JSX - JavaScript XML
// TSX = TypeScript XML

import nlwUniteIcon from '../assets/svg/nlwIcon.svg';
import { NavLink } from './navLink';

export function Header(){
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} />

      <nav className='flex items-center gap-5'>
        <NavLink href='/eventos'>Eventos</NavLink>
        <NavLink href='/participantes'>Participantes</NavLink>
      </nav>
    </div>
  )
}