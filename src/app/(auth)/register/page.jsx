import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Book a table',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-3xl font-semibold text-gray-900">
        Reserve a table
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Our team will confirm or decline your booking after submitting your information.
      </p>
      <form
        action="#"
        className="group mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        noValidate
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          placeholder='First Name'
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          placeholder='Last Name'
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder='your@email.com'
          required
        />
        <TextField
          className="col-span-full"
          label="Telephone"
          name="tel"
          type="tel"
          placeholder='+44 1234 5678'
          required
        />
        <TextField
          className="col-span-full"
          label="How many people?"
          name="number"
          type="number"
          min='1'
          max='12'
          placeholder='2'
          autoComplete="guestnumber"
          required
        />
        <TextField
          className="col-span-full"
          label="Date"
          name="date"
          type="date"
          autoComplete
          required
        />

        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>Social Media</option>
          <option>Review Site</option>
          <option>Friend/Family Member</option>
          <option>Other</option>
        </SelectField>
        <div className="col-span-full">
          <Button href='/register/confirm' type="submit" variant="solid" color='yellow' className="w-full my-6 group-invalid:pointer-events-none group-invalid:opacity-30">
            <span>
              Book Table <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
