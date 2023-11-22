import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Book a table',
}

export default function Confirm() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-3xl font-semibold text-gray-900">
        Confirmed Reservation
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Your reservation has been confirmed, we look forward to seeing you.
      </p>
      <div className="col-span-full">
          <Button href='/' type="submit" variant="solid" color='yellow' className="w-full my-6">
            <span>
             Back to home <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
    </SlimLayout>
  )
}
