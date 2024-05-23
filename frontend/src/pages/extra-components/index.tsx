import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconChevronRight } from '@tabler/icons-react'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Layout, LayoutBody, LayoutHeader } from 'Frontend/src/components/custom/layout'
import { Breadcrumb, BreadcrumbItem } from 'Frontend/src/components/custom/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'Frontend/src/components/ui/tabs'
import { Separator } from 'Frontend/src/components/ui/separator'
import { Input } from 'Frontend/src/components/ui/input'
import { Search } from 'Frontend/src/components/search'
import ThemeSwitch from 'Frontend/src/components/theme-switch'
import { UserNav } from 'Frontend/src/components/user-nav'

export default function ExtraComponents() {
  const items = [
    { title: 'Extra Components', href: '/extra-components' },
    { title: 'Breadcrumb' },
  ].map(({ href, title }) => (
    <BreadcrumbItem key={title}>
      {href ? (
        <Link
          className='text-muted-foreground underline decoration-muted-foreground decoration-dashed underline-offset-4 hover:text-foreground hover:decoration-solid'
          to={href}
        >
          {title}
        </Link>
      ) : (
        <span className='text-muted-foreground'>{title}</span>
      )}
    </BreadcrumbItem>
  ))

  const [pinInput, setPinInput] = useState('')

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      <LayoutBody className='space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Extra Components
          </h1>
        </div>
        <h2 className='text-lg font-bold md:text-xl'>Breadcrumbs</h2>
        <Breadcrumb separator={<IconChevronRight size={18} />}>
          {items}
        </Breadcrumb>
        <Breadcrumb>{items}</Breadcrumb>


      </LayoutBody>
    </Layout>
  )
}
