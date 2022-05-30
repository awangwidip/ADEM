import React from 'react'
import './Academic.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Academic () {
	return (
		<div className='Academic_Academic'>
			<span className='BingungYukTanyaMaya'>Bingung? Yuk Tanya Maya!</span>
			<div className='Header'>
				<Link to='/'>
					<span className='Home'>Home</span>
				</Link>
			</div>
			<span className='ADEM'>ADEM</span>
			<div className='Group'>
				<img className='Vector' src = {ImgAsset.Academic_Vector} />
				<img className='Vector_1' src = {ImgAsset.Academic_Vector_1} />
			</div>
			<span className='AcademicAnnouncement'>Academic Announcement</span>
			<div className='Group1440'>
				<div className='Rectangle50'/>
				<span className='LoremipsumdolorsitametconsecteturadipiscingelitPraesenteuplaceratmassaAeneanegestasdiamalacusmalesuadascelerisque'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu placerat massa. Aenean egestas diam a lacus malesuada scelerisque.</span>
				<span className='ReadMore'>Read More</span>
				<span className='Loremipsumdolorsitamet'>Lorem ipsum dolor sit amet</span>
			</div>
			<div className='Group1435'>
				<div className='Rectangle50_1'/>
				<span className='LoremipsumdolorsitametconsecteturadipiscingelitPraesenteuplaceratmassaAeneanegestasdiamalacusmalesuadascelerisque_1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu placerat massa. Aenean egestas diam a lacus malesuada scelerisque.</span>
				<span className='ReadMore_1'>Read More</span>
				<span className='Loremipsumdolorsitamet_1'>Lorem ipsum dolor sit amet</span>
			</div>
			<div className='Group1441'>
				<div className='Rectangle50_2'/>
				<span className='LoremipsumdolorsitametconsecteturadipiscingelitPraesenteuplaceratmassaAeneanegestasdiamalacusmalesuadascelerisque_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu placerat massa. Aenean egestas diam a lacus malesuada scelerisque.</span>
				<span className='ReadMore_2'>Read More</span>
				<span className='Loremipsumdolorsitamet_2'>Lorem ipsum dolor sit amet</span>
			</div>
			<div className='Group1436'>
				<div className='Rectangle50_3'/>
				<span className='LoremipsumdolorsitametconsecteturadipiscingelitPraesenteuplaceratmassaAeneanegestasdiamalacusmalesuadascelerisque_3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu placerat massa. Aenean egestas diam a lacus malesuada scelerisque.</span>
				<span className='ReadMore_3'>Read More</span>
				<span className='Loremipsumdolorsitamet_3'>Lorem ipsum dolor sit amet</span>
			</div>
			<div className='Group1434'>
				<div className='Rectangle50_4'/>
				<span className='LoremipsumdolorsitametconsecteturadipiscingelitPraesenteuplaceratmassaAeneanegestasdiamalacusmalesuadascelerisque_4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu placerat massa. Aenean egestas diam a lacus malesuada scelerisque.</span>
				<span className='ReadMore_4'>Read More</span>
				<span className='Loremipsumdolorsitamet_4'>Lorem ipsum dolor sit amet</span>
			</div>
			<div className='Group1437'>
				<div className='Rectangle50_5'/>
				<span className='LoremipsumdolorsitametconsecteturadipiscingelitPraesenteuplaceratmassaAeneanegestasdiamalacusmalesuadascelerisque_5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu placerat massa. Aenean egestas diam a lacus malesuada scelerisque.</span>
				<span className='ReadMore_5'>Read More</span>
				<span className='Loremipsumdolorsitamet_5'>Lorem ipsum dolor sit amet</span>
			</div>
			<div className='Group1438'>
				<div className='Rectangle889'/>
				<span className='Search'>Search</span>
			</div>
			<Link to='/chatbot'>
				<div className='Group1447'>
					<div className='Rectangle875'/>
					<span className='HaveaQuestionAskMaya'>Have a Question? Ask Maya</span>
					<div className='Group_1'>
						<img className='Vector_2' src = {ImgAsset.Academic_Vector_2} />
						<img className='Vector_3' src = {ImgAsset.Academic_Vector_3} />
					</div>
					<img className='Vector89' src = {ImgAsset.Academic_Vector89} />
				</div>
			</Link>
		</div>
	)
}