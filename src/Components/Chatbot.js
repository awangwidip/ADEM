import React from 'react'
import './Chatbot.css'
import ImgAsset from '../public'
export default function Chatbot () {
	return (
		<div className='Chatbot_Chatbot'>
			<div className='Group1443'>
				<div className='Group1442'>
					<div className='Group1434'>
						<div className='Rectangle874'/>
						<img className='Rectangle110' src = {ImgAsset.Chatbot_Rectangle110} />
						<img className='Rectangle886' src = {ImgAsset.Chatbot_Rectangle886} />
						<div className='Rectangle885'/>
						<span className='Isthereanythingthaticanhelp'>Is there anything that i can help?</span>
						<span className='Loremipsumdolorsitamet'>Lorem ipsum dolor sit amet</span>
						<span className='Typeyourquestionhere'>Type your question here!</span>
					</div>
					<div className='Group1440'>
						<div className='Rectangle875'/>
						<span className='HaveaQuestionAskMaya'>Have a Question? Ask Maya</span>
						<div className='Group'>
							<img className='Vector' src = {ImgAsset.Chatbot_Vector} />
							<img className='Vector_1' src = {ImgAsset.Chatbot_Vector_1} />
						</div>
						<img className='Vector89' src = {ImgAsset.Chatbot_Vector89} />
					</div>
				</div>
				<img className='Vector_2' src = {ImgAsset.Chatbot_Vector_2} />
			</div>
		</div>
	)
}