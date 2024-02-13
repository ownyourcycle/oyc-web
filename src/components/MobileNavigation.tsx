'use client'
import { Burger, Menu } from '@mantine/core'
import Link from 'next/link'
import { useState } from 'react'

export const MobileNavigation = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Menu
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      arrowSize={15}
      offset={0}
      width={200}
      withArrow={true}
      transitionProps={{
        transition: 'slide-left',
      }}
      shadow="md"
    >
      <Menu.Target>
        <Burger color="gray" opened={opened} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          href="https://ownyourcycle.teachable.com"
          className="text-xl text-gradient font-bold"
        >
          ✨ Kurz ✨
        </Menu.Item>
        <Menu.Item component={Link} href="/seminar-zilina" className="text-gray-600 text-xl hover:text-gray-400">
          SEMINÁR 23. 3. V ŽILINE
        </Menu.Item>
        <Menu.Item component={Link} href="/konzultacia" className="text-gray-600 text-xl  hover:text-gray-400">
          Konzultácia
        </Menu.Item>
        <Menu.Item component={Link} href="/blog" className="text-gray-600 text-xl hover:text-gray-400">
          Blog
        </Menu.Item>
        <Menu.Item component={Link} href="/kontakt" className="text-gray-600 text-xl hover:text-gray-400">
          Kontakt
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
