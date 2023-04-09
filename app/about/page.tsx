import classnames from 'classnames';
import Image from 'next/image';
import styles from './about.module.css';

const content = {
	welcome: {
		title:
			"Welcome! Thanks for visiting. I'm Adam and I'm thrilled to have you here.",
		text: [
			'My journey began in the sunny suburbs of the Arizona desert. I grew up riding a wave of tech growth in a culturally rich environment. With a PC always within reach, I developed a passion for creativity through constant learning and tinkering, which ultimately led me to pursue a career as a software engineer.',
			'As a child, I also had a love for drawing and art, which has translated into my work as a programmer. I find immense satisfaction in bringing the user interface to life and creating beautiful, useful (and satisfying!) software.',
			'I owe a lot to my friends and family, who exposed me to so many new ideas and things that have shaped who I am today.',
		],
		image: {
			src: '/adam.webp',
			alt: 'Adam Wehunt',
			width: 500,
			height: 387,
		},
	},
	biography: {
		title: 'Biography',
		headline: 'I was born to create.',
		text: [
			'Born in Mesa, Arizona, I found my love for programming, web design, and PC repair during my high school years. In college, I created websites in my free time and earned an associates degree. However, upon graduation, I developed a calling to work outdoors and engage in more hands-on activities. I began installing solar panels across the valley as a fun and meaningful endeavor, as it allowed me to make a positive impact on the environment.',
			'Eventually, I accelerated my passion by joining a coding bootcamp to jumpstart my skills in building modern web applications. I then joined Faithlife, the largest bible software company, as a Full Stack Engineer, where I contributed to a variety of projects. These included the development of TV apps for Roku, Amazon Fire, AppleTV, and web, as well as front-end web projects and desktop application support.',
			'Following my time at Faithlife, I took a six-month break to travel and enjoy quality time with my wife and 2-year old. Currently based in Flagstaff, Arizona, I work remotely on small projects for acquaintances while actively seeking a new full-time position that will allow me to continue learning and honing my skills.',
		],
		image: {
			src: '/family.jpeg',
			alt: 'The fam',
			width: 962,
			height: 1280,
		},
		caption:
			"This photo is not Flagstaff, Arizona. But it's me, my wife, and daughter at the beach in northern California.",
	},
	dayToDay: {
		title: 'Day to Day',
		text: [
			'I spend my days in the cool serene forest of Flagstaff, Arizona. Here I get to code with the sound of the aspens rustling outside my window and view a large forest from the comfort of my back porch.',
			"When I need a break from coding, I love to explore the great outdoors. Whether it's going on a hike, camping, or backpacking with my wife and child, I find solace in nature and feel invigorated by calming nature it provides. And when I'm not out in nature, I'm at the playground with my daughter, pushing her on the swings, watching her run around, and helping her discover bugs and other new things that I get to re-experience.",
			"After we put TLO (the little one) to bed, I usually spend evenings on the couch with my wife. She's an amazing artist who spends her time drawing on the iPad (you can check out her work on her Instagram). Meanwhile, I like to keep myself busy with a few different hobbies. Sometimes, I'll be coding (I used to pull form a long list of silly ideas, but lately Ive been planning out games my daughter would enjoy). Other times, I might be indulging in my high school hobby of painting miniatures for tabletop games. In addition to that, I enjoy watching tv shows, scrolling through Reddit and YouTube, and listening to podcasts to find cool new perspectives on the world. Whether it's expanding my knowledge on a certain subject or simply having a good laugh, I find these activities to be a great way to unwind after a long day.",
			"I cherish the freedom and flexibility to work remotely while living outside the hustle and bustle of big cities. I love being able to escape the noise and pollution of urban environments, and instead enjoy the clarity that comes with living in the great outdoors. Here, I can stargaze at night and wake up to the sound of birds chirping in the morning. It's a simple and fulfilling life that I am grateful to be living.",
		],
	},
};

export default function About() {
	const { welcome, biography, dayToDay } = content;
	return (
		<main className={styles.main}>
			<div className={styles.fullRow}>
				<Image
					className={styles.avatarImage}
					alt={'Welcome!'}
					src={'/hello.webp'}
					width={500}
					height={387}
				/>
			</div>
			<div className={classnames(styles.fullRow, styles.welcomeTitle)}>
				<h2>{welcome.title}</h2>
			</div>
			<div className={classnames(styles.fullRow, styles.welcome)}>
				<div>
					{welcome.text.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			</div>
			<div className={classnames(styles.fullRow, styles.aboutMe)}>
				<div>
					<h2>{biography.title}</h2>
					<h3>{biography.headline}</h3>
					{biography.text.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
				<div>
					<Image
						className={styles.familyPhoto}
						alt={biography.image.alt}
						src={biography.image.src}
						width={biography.image.width}
						height={biography.image.height}
					/>
					<p className={styles.familyPhotoCaption}>{biography.caption}</p>
				</div>
			</div>
			<div className={styles.fullRow}>
				<div>
					<h2>{dayToDay.title}</h2>
					{dayToDay.text.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			</div>
			<div className={styles.fullRow}></div>
		</main>
	);
}
