'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface Props {}

export default function AppHeader({}: Props) {
	const router = useRouter()

	const [opacity, setOpacity] = useState(0)

	useEffect(() => {
		const $page = document.getElementById('page')

		if ($page) {
			const scrollHandler = (event: Event) => {
				const scrollValue = $page.scrollTop.toFixed(0)
				const newOpacity = parseInt(scrollValue) * 0.01 > 1 ? 1 : parseInt(scrollValue) * 0.01

				console.log(newOpacity)
				console.log(scrollValue)

				setOpacity(newOpacity)
			}
			$page.addEventListener('scroll', scrollHandler)
		}
	}, [])

	return (
		<header
			className={`h-16 px-6 sticky top-0 z-10 flex justify-between items-center`}
			style={{ backgroundColor: `rgb(33 18 70 / ${opacity})` }}
		>
			<div className='flex gap-2'>
				<NavButton>
					<BsChevronLeft className='text-xl' onClick={() => router.back()} />
				</NavButton>
				<NavButton>
					<BsChevronRight className='text-xl' onClick={() => router.forward()} />
				</NavButton>
			</div>

			<a
				href='https://github.com/SamuelRnn'
				target='_blank'
				className='overflow-hidden rounded-full'
			>
				<Image src='/dev.png' alt='dev picture' width={32} height={32} quality={50} />
			</a>
		</header>
	)
}

//nav handling button
interface NavButtonProps {
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function NavButton({ children, onClick }: NavButtonProps) {
	return (
		<button
			onClick={onClick}
			className='rounded-full bg-black-full grid place-content-center w-8 h-8'
		>
			{children}
		</button>
	)
}
