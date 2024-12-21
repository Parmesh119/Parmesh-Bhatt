"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { Command } from 'cmdk';

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
);

interface SearchItem {
  id: string;
  title: string;
  type: 'project' | 'article' | 'section';
  href: string;
}

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Mock data - replace with real data
  const items: SearchItem[] = [
    { id: '1', title: 'About Me', type: 'section', href: '#about' },
    { id: '2', title: 'Projects', type: 'section', href: '#projects' },
    { id: '3', title: 'Experience', type: 'section', href: '#experience' },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };  

    if(typeof window !== "undefined") {
      document.addEventListener('keydown', down);
    }
      
    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keydown', down);
      }
    };
    // return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="hidden md:flex items-center gap-2 text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          >
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
              <Command className="rounded-lg border shadow-lg">
                <div className="flex items-center border-b px-3">
                  <Search className="h-4 w-4 shrink-0 opacity-50" />
                  <Command.Input
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Search..."
                    className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Command.List className="max-h-[300px] overflow-y-auto p-2">
                  <Command.Empty>No results found.</Command.Empty>
                  {items.map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.title}
                      onSelect={() => {
                        if(typeof window !== "undefined") {
                          window.location.href = item.href;
                        }
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent cursor-pointer"
                    >
                      {item.title}
                      <span className="ml-auto text-xs text-muted-foreground">
                        {item.type}
                      </span>
                    </Command.Item>
                  ))}
                </Command.List>
              </Command>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}