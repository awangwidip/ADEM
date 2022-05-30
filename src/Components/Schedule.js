import React from 'react'
import './Schedule.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Schedule () {
	return (
		<div className='Schedule_Schedule'>
			<div className='Group'>
				<img className='Vector' src = {ImgAsset.Schedule_Vector} />
				<img className='Vector_1' src = {ImgAsset.Schedule_Vector_1} />
			</div>
			<div className='Group1444'>
				<span className='CourseSchedule'>Course Schedule</span>
				<div className='Group1433'>
					<div className='Rectangle889'/>
					<span className='Search'>Search</span>
				</div>
				<div className='Group1432'>
					<div className='Rectangle888'/>
					<img className='Line77' src = {ImgAsset.Schedule_Line77} />
					<img className='Line78' src = {ImgAsset.Schedule_Line78} />
					<img className='Line79' src = {ImgAsset.Schedule_Line79} />
					<img className='Line80' src = {ImgAsset.Schedule_Line80} />
					<img className='Line81' src = {ImgAsset.Schedule_Line81} />
				</div>
				<img className='Vector_2' src = {ImgAsset.Schedule_Vector_2} />
			</div>
			<div className='Group1445'>
				<div className='Header'>
					<Link to='/'>
						<span className='Home'>Home</span>
					</Link>
				</div>
				<span className='ADEM'>ADEM</span>
			</div>
			<Link to='/chatbot'>
				<div className='Group1440'>
					<div className='Rectangle875'/>
					<span className='HaveaQuestionAskMaya'>Have a Question? Ask Maya</span>
					<div className='Group_1'>
						<img className='Vector_3' src = {ImgAsset.Schedule_Vector_3} />
						<img className='Vector_4' src = {ImgAsset.Schedule_Vector_4} />
					</div>
					<img className='Vector89' src = {ImgAsset.Schedule_Vector89} />
				</div>
			</Link>
			<span className='Lorem'>Lorem </span>
			<span className='Lorem_1'>Lorem </span>
			<span className='Loremipsum'>Lorem ipsum </span>
			<span className='Loremipsum_1'>Lorem ipsum </span>
			<span className='Loremipsum_2'>Lorem ipsum </span>
			<img className='Line82' src = {ImgAsset.Schedule_Line82} />
			<img className='Line83' src = {ImgAsset.Schedule_Line83} />
			<img className='Line84' src = {ImgAsset.Schedule_Line84} />
			<img className='Line85' src = {ImgAsset.Schedule_Line85} />
			<img className='Line86' src = {ImgAsset.Schedule_Line86} />
			<img className='Line87' src = {ImgAsset.Schedule_Line87} />
			<img className='Line88' src = {ImgAsset.Schedule_Line88} />
		</div>
	)
}