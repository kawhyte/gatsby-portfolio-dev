import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects } from 'Components/landing'
import 'tachyons'
import { apps } from '../components/landing/Projects/apps'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects/>
		{/* <Skills /> */}
		<Contact />
	</Layout>
)
