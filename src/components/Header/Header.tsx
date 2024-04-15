import { CiUser } from 'react-icons/ci'
import { GoHeart } from 'react-icons/go'
import { IoStatsChart } from 'react-icons/io5'
import logo from '../../assets/image/logo.svg'
import './Header.css'

const Header = () => {
	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<div className='headerImginH4'>
						<img className='logo' src={logo} alt='' />
						<h4>Лучшие цены в интернет-магазинах </h4>
					</div>
					<div className='headerButtonInInput'>
						<div className='f'>
							<button className='products1'>Каталог товаров</button>
						</div>
						<input type='text' placeholder='Поиск товаров' />
					</div>
					<div className='btns'>
						<button>
							<GoHeart />
						</button>
						<button>
							<IoStatsChart />
						</button>
						<button>
							<CiUser />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
