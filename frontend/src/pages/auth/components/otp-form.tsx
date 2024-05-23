import { HTMLAttributes, useState } from 'react'
import { cn } from 'Frontend/src/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from 'Frontend/src/components/custom/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from 'Frontend/src/components/ui/form'
import { Input } from 'Frontend/src/components/ui/input'
import { Separator } from 'Frontend/src/components/ui/separator'

interface OtpFormProps extends HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  otp: z.string().min(1, { message: 'Please enter your otp code.' }),
})

export function OtpForm({ className, ...props }: OtpFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [disabledBtn, setDisabledBtn] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: '' },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log({ data })

    setTimeout(() => {
      form.reset()
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <Button className='mt-2' disabled={disabledBtn} loading={isLoading}>
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
