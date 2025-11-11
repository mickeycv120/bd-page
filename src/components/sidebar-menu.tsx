"use client";
import Image from "next/image";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconUserBolt } from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Home, School } from "lucide-react";

export default function SidebarMenu() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <Home className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
    {
      label: "Team",
      href: "/about",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
    {
      label: "ITQ",
      href: "https://queretaro.tecnm.mx/",
      icon: (
        <School className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10 bg-blue-950">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="flex items-center">
              <Image
                src="https://www.tecnm.mx/images/tecnm_virtual/tecnm.png"
                alt="Logo"
                width={90}
                height={90}
              />

              <motion.span
                animate={{
                  display: true
                    ? open
                      ? "inline-block"
                      : "none"
                    : "inline-block",
                  opacity: true ? (open ? 1 : 0) : 1,
                }}
                className="text-white dark:text-neutral-200 text-md group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 ml-4 mt-0 text-center"
              >
                Tecnológico
                <br />
                Nacional de México
              </motion.span>
            </div>
            <hr className="my-4 border-t border-white/30" />

            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink className="text-white" key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Itq students",
                href: "https://sii.itq.edu.mx/sistema/",
                icon: (
                  <Image
                    src="https://queretaro.tecnm.mx/wp-content/uploads/2021/09/LOGOS-INSTITUCIONALES-ITQ-07-1024x1024.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
