import { Inter } from 'next/font/google'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <p className='title-sub'>현대카드 애플페이 결제됩니다.</p>
    </div>
  )
}
