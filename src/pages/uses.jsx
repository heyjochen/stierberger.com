import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Jochen Stierberger</title>
        <meta
          name="description"
          content="Software I use, tech I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software and stay productive. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1, 32GB RAM (2021)">
              I was using an Intel-based 15” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Charibdis Nano & Charibdis Dilemma">
              An open-source ergo mechanical
              <a
                href="https://github.com/Bastardkb/Dilemma
"
                className="ml-1 font-bold text-rose-500 underline"
              >
                keyboard
              </a>
              , featuring 3D printed DES keycaps in MJF Nylon and lubed
              switches. I switched from QWERTY to COLEMAK-DH and while my wpm
              are still not where they were, my fingers (esp. pinkies) are way
              happier after a day of coding.
            </Tool>
            <Tool title="MX Master 3s">
              I love how its sleek, ergonomic design fits comfortably in my
              hand, providing great control and precision.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="LazyVim">
              <a
                href="https://github.com/LazyVim/LazyVim"
                className="mr-1 font-bold text-rose-500 underline"
              >
                LazyVim
              </a>
              is a plugin for the Vim text editor that provides automated and
              customizable code refactoring and formatting.
            </Tool>
            <Tool title="Alacritty">
              <a
                href="https://alacritty.org/"
                className="mr-1 font-bold text-rose-500 underline"
              >
                Alacritty
              </a>
              is a blazing-fast, GPU-accelerated terminal emulator that
              prioritizes simplicity and performance.
            </Tool>
            <Tool title="tmux">
              <a
                href="https://github.com/tmux/tmux/wiki"
                className="mr-1 font-bold text-rose-500 underline"
              >
                Tmux
              </a>
              is a terminal multiplexer that enables multiple terminals or
              windows within a single session, providing efficient and flexible
              management of terminal sessions.
            </Tool>
            <Tool title="yabai">
              <a
                href="https://github.com/koekeishiya/yabai"
                className="mr-1 font-bold text-rose-500 underline"
              >
                Yabai
              </a>
              is a macOS window manager that allows users to easily manage and
              arrange windows, workspaces, and displays using customizable
              keyboard shortcuts.
            </Tool>
            <Tool title="skhd">
              <a
                href="https://github.com/koekeishiya/skhd"
                className="mr-1 font-bold text-rose-500 underline"
              >
                Skhd
              </a>
              is a simple hotkey daemon for macOS that enables users to map
              customizable keyboard shortcuts to perform a wide range of actions
              and commands.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              With its intuitive interface and extensive range of features,
              Figma has become my choice when it comes to mockups.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              <a
                href="https://www.raycast.com/"
                className="mr-1 font-bold text-rose-500 underline"
              >
                Raycast
              </a>
              is a productivity tool for macOS that provides quick access to
              frequently-used tasks, applications, and information using
              customizable keyboard shortcuts and a simple, intuitive interface.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
