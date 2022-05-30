import React from 'react'
import './LandingPage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function LandingPage () {
	return (
		<div className='LandingPage_LandingPage'>
			<span className='AcademicInformation'>Academic Information</span>
			<div className='Group1'>
				<div className='Rectangle48'/>
				<img className='image2' src = {ImgAsset.LandingPage_image2} />
				{/* <div className='Sliderright'>
					<div className='Ellipse44'/>
					<img className='Vector1' src = {ImgAsset.LandingPage_Vector1} />
				</div>
				<div className='Sliderleft'>
					<div className='Ellipse44_1'/>
					<img className='Vector1_1' src = {ImgAsset.LandingPage_Vector1_1} />
				</div> */}
			</div>
			<Link to='/scholarship'>
				<div className='Rectangle112'/>
			</Link>
			<Link to='/internship'>
				<div className='Rectangle113'/>
			</Link>
			<Link to='/news'>
				<div className='Rectangle114'/>
			</Link>
			<Link to='/schedule'>
				<div className='Rectangle49'/>
			</Link>
			<Link to='/academic'>
				<div className='Rectangle47'/>
			</Link>
			<span href = '/scholarship' className='CompetitionandSchoolarship'>Competition and Schoolarship</span>
			<span href = '/internship' className='Internship'>Internship</span>
			<span href = '/news' className='News'>News</span>
			<span href = '/schedule' className='Course'>Course</span>
			<span href = '/academic' className='Academic'>Academic</span>
			<div className='Jadwal'>
				<div className='Rectangle871'/>
				<div className='Rectangle872'/>
				<div className='Ellipse239'/>
				<div className='Ellipse248'/>
				<div className='Ellipse249'/>
				<div className='Ellipse250'/>
				<div className='Ellipse240'/>
				<div className='Ellipse241'/>
				<div className='Group1409'>
					<img className='Line59' src = {ImgAsset.LandingPage_Line59} />
					<img className='Line60' src = {ImgAsset.LandingPage_Line60} />
				</div>
				<div className='Group1410'>
					<img className='Line59_1' src = {ImgAsset.LandingPage_Line59_1} />
					<img className='Line60_1' src = {ImgAsset.LandingPage_Line60_1} />
				</div>
				<div className='Group1411'>
					<img className='Line59_2' src = {ImgAsset.LandingPage_Line59_2} />
					<img className='Line60_2' src = {ImgAsset.LandingPage_Line60_2} />
				</div>
				<div className='Ellipse245'/>
				<div className='Ellipse246'/>
				<img className='Line71' src = {ImgAsset.LandingPage_Line71} />
				<img className='Line72' src = {ImgAsset.LandingPage_Line72} />
				<img className='Line73' src = {ImgAsset.LandingPage_Line73} />
				<img className='Vector85' src = {ImgAsset.LandingPage_Vector85} />
				<div className='Ellipse257'/>
				<div className='Ellipse258'/>
				<div className='Ellipse259'/>
				<div className='Ellipse260'/>
				<div className='Ellipse261'/>
				<div className='Ellipse262'/>
				<div className='Group1419'>
					<img className='Line59_3' src = {ImgAsset.LandingPage_Line59_3} />
					<img className='Line60_3' src = {ImgAsset.LandingPage_Line60_3} />
				</div>
				<div className='Group1420'>
					<img className='Line59_4' src = {ImgAsset.LandingPage_Line59_4} />
					<img className='Line60_4' src = {ImgAsset.LandingPage_Line60_4} />
				</div>
				<img className='Line74' src = {ImgAsset.LandingPage_Line74} />
				<img className='Line75' src = {ImgAsset.LandingPage_Line75} />
				<img className='Line76' src = {ImgAsset.LandingPage_Line76} />
			</div>
			<div className='Jadwal_1'>
				<div className='Rectangle871_1'/>
				<div className='Rectangle872_1'/>
				<div className='Ellipse239_1'/>
				<div className='Ellipse248_1'/>
				<div className='Ellipse249_1'/>
				<div className='Ellipse250_1'/>
				<div className='Ellipse240_1'/>
				<div className='Ellipse241_1'/>
				<div className='Group1409_1'>
					<img className='Line59_5' src = {ImgAsset.LandingPage_Line59_5} />
					<img className='Line60_5' src = {ImgAsset.LandingPage_Line60_5} />
				</div>
				<div className='Group1410_1'>
					<img className='Line59_6' src = {ImgAsset.LandingPage_Line59_6} />
					<img className='Line60_6' src = {ImgAsset.LandingPage_Line60_6} />
				</div>
				<div className='Group1411_1'>
					<img className='Line59_7' src = {ImgAsset.LandingPage_Line59_7} />
					<img className='Line60_7' src = {ImgAsset.LandingPage_Line60_7} />
				</div>
				<div className='Ellipse245_1'/>
				<div className='Ellipse246_1'/>
				<img className='Line71_1' src = {ImgAsset.LandingPage_Line71_1} />
				<img className='Line72_1' src = {ImgAsset.LandingPage_Line72_1} />
				<img className='Line73_1' src = {ImgAsset.LandingPage_Line73_1} />
				<img className='Vector85_1' src = {ImgAsset.LandingPage_Vector85_1} />
				<div className='Ellipse257_1'/>
				<div className='Ellipse258_1'/>
				<div className='Ellipse259_1'/>
				<div className='Ellipse260_1'/>
				<div className='Ellipse261_1'/>
				<div className='Ellipse262_1'/>
				<div className='Group1419_1'>
					<img className='Line59_8' src = {ImgAsset.LandingPage_Line59_8} />
					<img className='Line60_8' src = {ImgAsset.LandingPage_Line60_8} />
				</div>
				<div className='Group1420_1'>
					<img className='Line59_9' src = {ImgAsset.LandingPage_Line59_9} />
					<img className='Line60_9' src = {ImgAsset.LandingPage_Line60_9} />
				</div>
				<img className='Line74_1' src = {ImgAsset.LandingPage_Line74_1} />
				<img className='Line75_1' src = {ImgAsset.LandingPage_Line75_1} />
				<img className='Line76_1' src = {ImgAsset.LandingPage_Line76_1} />
			</div>
			<div className='Jadwal_2'>
				<div className='Rectangle871_2'/>
				<div className='Rectangle872_2'/>
				<div className='Ellipse239_2'/>
				<div className='Ellipse248_2'/>
				<div className='Ellipse249_2'/>
				<div className='Ellipse250_2'/>
				<div className='Ellipse240_2'/>
				<div className='Ellipse241_2'/>
				<div className='Group1409_2'>
					<img className='Line59_10' src = {ImgAsset.LandingPage_Line59_10} />
					<img className='Line60_10' src = {ImgAsset.LandingPage_Line60_10} />
				</div>
				<div className='Group1410_2'>
					<img className='Line59_11' src = {ImgAsset.LandingPage_Line59_11} />
					<img className='Line60_11' src = {ImgAsset.LandingPage_Line60_11} />
				</div>
				<div className='Group1411_2'>
					<img className='Line59_12' src = {ImgAsset.LandingPage_Line59_12} />
					<img className='Line60_12' src = {ImgAsset.LandingPage_Line60_12} />
				</div>
				<div className='Ellipse245_2'/>
				<div className='Ellipse246_2'/>
				<img className='Line71_2' src = {ImgAsset.LandingPage_Line71_2} />
				<img className='Line72_2' src = {ImgAsset.LandingPage_Line72_2} />
				<img className='Line73_2' src = {ImgAsset.LandingPage_Line73_2} />
				<img className='Vector85_2' src = {ImgAsset.LandingPage_Vector85_2} />
				<div className='Ellipse257_2'/>
				<div className='Ellipse258_2'/>
				<div className='Ellipse259_2'/>
				<div className='Ellipse260_2'/>
				<div className='Ellipse261_2'/>
				<div className='Ellipse262_2'/>
				<div className='Group1419_2'>
					<img className='Line59_13' src = {ImgAsset.LandingPage_Line59_13} />
					<img className='Line60_13' src = {ImgAsset.LandingPage_Line60_13} />
				</div>
				<div className='Group1420_2'>
					<img className='Line59_14' src = {ImgAsset.LandingPage_Line59_14} />
					<img className='Line60_14' src = {ImgAsset.LandingPage_Line60_14} />
				</div>
				<img className='Line74_2' src = {ImgAsset.LandingPage_Line74_2} />
				<img className='Line75_2' src = {ImgAsset.LandingPage_Line75_2} />
				<img className='Line76_2' src = {ImgAsset.LandingPage_Line76_2} />
			</div>
			<div className='Jadwal_3'>
				<div className='Rectangle871_3'/>
				<div className='Rectangle872_3'/>
				<div className='Ellipse239_3'/>
				<div className='Ellipse248_3'/>
				<div className='Ellipse249_3'/>
				<div className='Ellipse250_3'/>
				<div className='Ellipse240_3'/>
				<div className='Ellipse241_3'/>
				<div className='Group1409_3'>
					<img className='Line59_15' src = {ImgAsset.LandingPage_Line59_15} />
					<img className='Line60_15' src = {ImgAsset.LandingPage_Line60_15} />
				</div>
				<div className='Group1410_3'>
					<img className='Line59_16' src = {ImgAsset.LandingPage_Line59_16} />
					<img className='Line60_16' src = {ImgAsset.LandingPage_Line60_16} />
				</div>
				<div className='Group1411_3'>
					<img className='Line59_17' src = {ImgAsset.LandingPage_Line59_17} />
					<img className='Line60_17' src = {ImgAsset.LandingPage_Line60_17} />
				</div>
				<div className='Ellipse245_3'/>
				<div className='Ellipse246_3'/>
				<img className='Line71_3' src = {ImgAsset.LandingPage_Line71_3} />
				<img className='Line72_3' src = {ImgAsset.LandingPage_Line72_3} />
				<img className='Line73_3' src = {ImgAsset.LandingPage_Line73_3} />
				<img className='Vector85_3' src = {ImgAsset.LandingPage_Vector85_3} />
				<div className='Ellipse257_3'/>
				<div className='Ellipse258_3'/>
				<div className='Ellipse259_3'/>
				<div className='Ellipse260_3'/>
				<div className='Ellipse261_3'/>
				<div className='Ellipse262_3'/>
				<div className='Group1419_3'>
					<img className='Line59_18' src = {ImgAsset.LandingPage_Line59_18} />
					<img className='Line60_18' src = {ImgAsset.LandingPage_Line60_18} />
				</div>
				<div className='Group1420_3'>
					<img className='Line59_19' src = {ImgAsset.LandingPage_Line59_19} />
					<img className='Line60_19' src = {ImgAsset.LandingPage_Line60_19} />
				</div>
				<img className='Line74_3' src = {ImgAsset.LandingPage_Line74_3} />
				<img className='Line75_3' src = {ImgAsset.LandingPage_Line75_3} />
				<img className='Line76_3' src = {ImgAsset.LandingPage_Line76_3} />
			</div>
			<div className='Jadwal_4'>
				<div className='Rectangle871_4'/>
				<div className='Rectangle872_4'/>
				<div className='Ellipse239_4'/>
				<div className='Ellipse248_4'/>
				<div className='Ellipse249_4'/>
				<div className='Ellipse250_4'/>
				<div className='Ellipse240_4'/>
				<div className='Ellipse241_4'/>
				<div className='Group1409_4'>
					<img className='Line59_20' src = {ImgAsset.LandingPage_Line59_20} />
					<img className='Line60_20' src = {ImgAsset.LandingPage_Line60_20} />
				</div>
				<div className='Group1410_4'>
					<img className='Line59_21' src = {ImgAsset.LandingPage_Line59_21} />
					<img className='Line60_21' src = {ImgAsset.LandingPage_Line60_21} />
				</div>
				<div className='Group1411_4'>
					<img className='Line59_22' src = {ImgAsset.LandingPage_Line59_22} />
					<img className='Line60_22' src = {ImgAsset.LandingPage_Line60_22} />
				</div>
				<div className='Ellipse245_4'/>
				<div className='Ellipse246_4'/>
				<img className='Line71_4' src = {ImgAsset.LandingPage_Line71_4} />
				<img className='Line72_4' src = {ImgAsset.LandingPage_Line72_4} />
				<img className='Line73_4' src = {ImgAsset.LandingPage_Line73_4} />
				<img className='Vector85_4' src = {ImgAsset.LandingPage_Vector85_4} />
				<div className='Ellipse257_4'/>
				<div className='Ellipse258_4'/>
				<div className='Ellipse259_4'/>
				<div className='Ellipse260_4'/>
				<div className='Ellipse261_4'/>
				<div className='Ellipse262_4'/>
				<div className='Group1419_4'>
					<img className='Line59_23' src = {ImgAsset.LandingPage_Line59_23} />
					<img className='Line60_23' src = {ImgAsset.LandingPage_Line60_23} />
				</div>
				<div className='Group1420_4'>
					<img className='Line59_24' src = {ImgAsset.LandingPage_Line59_24} />
					<img className='Line60_24' src = {ImgAsset.LandingPage_Line60_24} />
				</div>
				<img className='Line74_4' src = {ImgAsset.LandingPage_Line74_4} />
				<img className='Line75_4' src = {ImgAsset.LandingPage_Line75_4} />
				<img className='Line76_4' src = {ImgAsset.LandingPage_Line76_4} />
			</div>
			<span className='BingungYukTanyaMaya'>Bingung? Yuk Tanya Maya!</span>
			<div className='Group1445'>
				<div className='Header'>
					<span className='Home'>Home</span>
					<span className='AboutUs'>         About Us</span>
				</div>
				<span className='ADEM'>ADEM</span>
			</div>
			<div className='Group'>
				<img className='Vector' src = {ImgAsset.LandingPage_Vector} />
				<img className='Vector_1' src = {ImgAsset.LandingPage_Vector_1} />
			</div>
				<div className='Group1440'>
					<div className='Rectangle875'  id='chatbutton'/>
					<span className='HaveaQuestionAskMaya'>Have a Question? Ask Maya</span>
					<div className='Group_1'>
						<img className='Vector_2' src = {ImgAsset.LandingPage_Vector_2} />
						<img className='Vector_3' src = {ImgAsset.LandingPage_Vector_3} />
					</div>
					<img className='Vector89' src = {ImgAsset.LandingPage_Vector89} />
				</div>
			<span className='header-title'>Congratulation<br/>GRADUATES period IV</span>
		</div>
	)
}