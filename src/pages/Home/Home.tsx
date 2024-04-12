import { FaRankingStar } from 'react-icons/fa6'
import { GrFormClose } from 'react-icons/gr'
import { IoHeartOutline } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import images1 from '../../assets/image/1.png'
import images2 from '../../assets/image/2.png'
import Laptop from '../../assets/image/Laptop.2.svg'
import {
	default as acc,
	default as accessories
} from '../../assets/image/accessory.svg'
import grade from '../../assets/image/grade.svg'
import {
	default as head,
	default as headPhones
} from '../../assets/image/head phones.svg'
import iphone from '../../assets/image/iphine.svg'
import laptop from '../../assets/image/laptop.svg'
import {
	default as Phone,
	default as phone,
	default as smartPhone
} from '../../assets/image/phone.svg'
import {
	default as play,
	default as playStation
} from '../../assets/image/play station.svg'
import revComp from '../../assets/image/revComp.svg'
import revHead from '../../assets/image/revHead.svg'
import revPhone from '../../assets/image/revPhone.svg'
import revRadio from '../../assets/image/revRadio.svg'
import {
	default as clock,
	default as smartClock
} from '../../assets/image/smart clock.svg'
import {
	default as Speakers,
	default as speaker
} from '../../assets/image/speaker.svg'
import {
	default as tablet,
	default as tablets
} from '../../assets/image/tablet.svg'
import './Home.css'

const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		adaptiveWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 2
				}
			}
		]
	}

	const settings12 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	return (
		<div id='home'>
			<div className='con'>
				<div className='home'>
					<div className='container'>
						<div className='category'>
							<div className='category1'>
								<h1>
									<span>1.8 млн</span> товаров в <span>2272</span> магазинах
									найди, сравни, выберай!
								</h1>
								<button>
									Перейти к категориям
									<MdNavigateNext />
								</button>
							</div>
							<div className='category2'>
								<h1>
									<span>Топ-10</span> смартфонов <br /> 2023 года
								</h1>
								<button>
									Смотреть
									<MdNavigateNext />
								</button>
							</div>
						</div>
					</div>
					<div className='bestChoise'>
						<div className='container'>
							<div className='gadgests'>
								<h2>Лучший выбор</h2>
								<div className=''>
									<Slider {...settings}>
										<div>
											<div className='planLogo'>
												<img src={phone} alt='' />
												<h5>Смартфоны</h5>
											</div>
										</div>
										<div>
											<div className='planLogo'>
												<img src={laptop} alt='' />
												<h5>Ноутбуки</h5>
											</div>
										</div>
										<div>
											<div className='planLogo'>
												<img src={tablet} alt='' />
												<h5>Планшеты</h5>
											</div>
										</div>
										<div>
											<div className='planLogo'>
												<img src={clock} alt='' />
												<h5>Умные часы</h5>
											</div>
										</div>
										<div>
											<div className='planLogo'>
												<img src={play} alt='' />
												<h5>Игровые приставки</h5>
											</div>
										</div>
										<div>
											<div className='planLogo'>
												<img src={head} alt='' />
												<h5>Наушники</h5>
											</div>
										</div>
										<div>
											{' '}
											<div className='planLogo'>
												<img src={speaker} alt='' />
												<h5>Портативные колонки</h5>
											</div>
										</div>
										<div>
											<div className='planLogo'>
												<img src={acc} alt='' />
												<h5>Аксесуары</h5>
											</div>
										</div>
									</Slider>
								</div>
							</div>
							<div className='proDet'>
								<div className='a'>
									<Slider {...settings}>
										<div>
											<button className='s'>
												Дизайн
												<span>
													<GrFormClose />
												</span>
											</button>
										</div>
										<div>
											<button className='s'>
												Портативность
												<GrFormClose />
											</button>
										</div>
										<div>
											{' '}
											<button className='s'>Камера</button>
										</div>
										<div>
											{' '}
											<button className='s'>Ответ</button>
										</div>
										<div>
											{' '}
											<button className='s'>Дисплей</button>
										</div>
										<div>
											{' '}
											<button className='s'>Батарея</button>
										</div>
									</Slider>
								</div>
								<div className='grade'>
									<div className='grInf'>
										<div className='products10'>
											<div className='productsButtonMainCard'>
												<div>
													<h5>Портативные колонки </h5>
													<h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
												</div>
												<div className='inf'>
													<div className='raBtns'>
														<button>
															<IoHeartOutline />
														</button>
														<button>
															<FaRankingStar />
														</button>
													</div>
												</div>
											</div>
											<div className='phone2'>
												<img src={iphone} alt='' />
												<img className='gr' src={grade} alt='' />
											</div>
										</div>
										<div className='products10'>
											<div className='productsButtonMainCard'>
												<div>
													<h5>Портативные колонки </h5>
													<h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
												</div>
												<div className='inf'>
													<div className='raBtns'>
														<button>
															<IoHeartOutline />
														</button>
														<button>
															<FaRankingStar />
														</button>
													</div>
												</div>
											</div>
											<div className='phone2'>
												<img src={iphone} alt='' />
												<img className='gr' src={grade} alt='' />
											</div>
										</div>
										<div className='products10'>
											<div className='productsButtonMainCard'>
												<div>
													<h5>Портативные колонки </h5>
													<h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
												</div>
												<div className='inf'>
													<div className='raBtns'>
														<button>
															<IoHeartOutline />
														</button>
														<button>
															<FaRankingStar />
														</button>
													</div>
												</div>
											</div>
											<div className='phone2'>
												<img src={iphone} alt='' />
												<img className='gr' src={grade} alt='' />
											</div>
										</div>
										<div className='products10'>
											<div className='productsButtonMainCard'>
												<div>
													<h5>Портативные колонки </h5>
													<h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
												</div>
												<div className='inf'>
													<div className='raBtns'>
														<button>
															<IoHeartOutline />
														</button>
														<button>
															<FaRankingStar />
														</button>
													</div>
												</div>
											</div>
											<div className='phone2'>
												<img src={iphone} alt='' />
												<img className='gr' src={grade} alt='' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='teksts'>
							<h1>
								Наша цель - создать фантастический сервис для всех потребителей
							</h1>
							<div className='tekst'>
								<div className='tekst1'>
									<h1>5</h1>
									<h5>
										Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a
										pharetra viverra enim nunc.{' '}
									</h5>
								</div>
								<div className='tekst2'>
									<h1>30</h1>
									<h5>
										Gravida vel convallis id aliquet volutpat nullam dignissim.
										Amet parturient elementum lectus rhoncus at.
									</h5>
								</div>
								<div className='tekst3'>
									<h1>300</h1>
									<h5>
										Sed varius ut venenatis id amet et consectetur pellentesque.
										Vitae urna ornare vel suspendisse tincidunt.{' '}
									</h5>
								</div>
								<div className='tekst4'>
									<h1>8</h1>
									<h5>
										Id enim ornare lacus duis. Ac fermentum auctor cras
										adipiscing feugiat quis convallis velit.{' '}
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='economic'>
							<div className='economicTextInButton'>
								<h1>
									<span className='textEcanonic'>Экономьте </span>
									свое время и получайте{' '}
									<span className='textEcanonic'>максимум</span> от ежедневных
									покупок
								</h1>
								<div className='economicTextButtonsA'>
									<img
										style={{
											objectFit: 'cover'
										}}
										src={images1}
										alt=''
									/>
								</div>
							</div>
							<div className='economicImage'>
								<img src={images2} alt='' />
							</div>
						</div>
						<div className='newProducts'>
							<div className='new'>
								<h3>Новинки</h3>
								<button>
									К новинкам
									<MdNavigateNext />
								</button>
							</div>
							<div className='PRODUCTS'>
								<div className='newProducts1'>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={smartClock} alt='' />
										</div>
										<p>Умные часы</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={headPhones} alt='' />
										</div>
										<p>Наушники</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={playStation} alt='' />
										</div>
										<p>Игровые приставки</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={smartPhone} alt='' />
										</div>
										<p>Смартфоны</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={tablets} alt='' />
										</div>
										<p>Планшеты</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className='newProducts2'>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={Phone} alt='' />
										</div>
										<p>Смартфоны</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={accessories} alt='' />
										</div>
										<p>Аксесуары</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={Laptop} alt='' />
										</div>
										<p>Ноутбуки</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={Speakers} alt='' />
										</div>
										<p>Портативные колонки </p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
									<div className='smartClock'>
										<div className='smartClockImages'>
											<img src={Phone} alt='' />
										</div>
										<p>Смартфоны</p>
										<h4>
											Apple iPhone 13 Pro <br /> Max 256 ГБ серый
										</h4>
										<div className='price'>
											<div className='price1'>
												<p>Цена</p>
												<h4>114 099 ₽</h4>
											</div>
											<div className='newBtns'>
												<button>
													<IoHeartOutline />
												</button>
												<button>
													<FaRankingStar />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='container'>
						<div className='review'>
							<div className='start'>
								<h3>Обзоры</h3>
								<button>
									К обзорам
									<MdNavigateNext />
								</button>
							</div>
							<div className='detasil'>
								<Slider {...settings12}>
									<div>
										<div className='revPhone'>
											<img src={revPhone} alt='' />
											<div className='revPhoneText'>
												<h3>
													Обзор устаревших <br /> смартфонов
												</h3>
												<p>
													Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus
													risus viverra enim nunc.{' '}
												</p>
												<button>
													Смотреть
													<MdNavigateNext />
												</button>
											</div>{' '}
										</div>
									</div>
									<div>
										{' '}
										<div className='revPhone'>
											<img src={revComp} alt='' />
											<div className='revPhoneText'>
												<h3>
													Обзор устаревших <br /> смартфонов
												</h3>
												<p>
													Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus
													risus viverra enim nunc.{' '}
												</p>
												<button>
													Смотреть
													<MdNavigateNext />
												</button>
											</div>
										</div>
									</div>
									<div>
										{' '}
										<div className='revPhone'>
											<img src={revRadio} alt='' />
											<div className='revPhoneText'>
												<h3>
													Обзор устаревших <br /> смартфонов
												</h3>
												<p>
													Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus
													risus viverra enim nunc.{' '}
												</p>
												<button>
													Смотреть
													<MdNavigateNext />
												</button>
											</div>
										</div>
									</div>
									<div>
										<div className='revPhone'>
											<img src={revHead} alt='' />
											<div className='revPhoneText'>
												<h3>
													Обзор устаревших <br /> смартфонов
												</h3>
												<p>
													Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus
													risus viverra enim nunc.{' '}
												</p>
												<button>
													Смотреть
													<MdNavigateNext />
												</button>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
