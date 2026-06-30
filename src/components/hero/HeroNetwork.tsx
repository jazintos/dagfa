"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe2,
  BrainCircuit,
  Radar,
  ShieldCheck,
  Cpu,
  Activity,
  Network,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type NodeData = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  icon: React.ElementType;
};

type Connection = {
  from: number;
  to: number;
};

const ICONS = [
  Database,
  Globe2,
  BrainCircuit,
  Radar,
  ShieldCheck,
  Cpu,
  Activity,
  Network,
];

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 7 },
  { from: 6, to: 7 },
  { from: 1, to: 5 },
  { from: 2, to: 6 },
];

export default function HeroNetwork() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nodes = useMemo<NodeData[]>(() => {
    return [
      {
        id: 0,
        x: 50,
        y: 18,
        size: 64,
        delay: 0,
        duration: 6,
        icon: ICONS[0],
      },
      {
        id: 1,
        x: 20,
        y: 35,
        size: 46,
        delay: 0.2,
        duration: 5.4,
        icon: ICONS[1],
      },
      {
        id: 2,
        x: 80,
        y: 34,
        size: 48,
        delay: 0.4,
        duration: 5.8,
        icon: ICONS[2],
      },
      {
        id: 3,
        x: 50,
        y: 50,
        size: 54,
        delay: 0.3,
        duration: 5.2,
        icon: ICONS[3],
      },
      {
        id: 4,
        x: 14,
        y: 70,
        size: 42,
        delay: 0.5,
        duration: 6.1,
        icon: ICONS[4],
      },
      {
        id: 5,
        x: 50,
        y: 82,
        size: 52,
        delay: 0.6,
        duration: 5.6,
        icon: ICONS[5],
      },
      {
        id: 6,
        x: 86,
        y: 70,
        size: 42,
        delay: 0.8,
        duration: 6.3,
        icon: ICONS[6],
      },
      {
        id: 7,
        x: 50,
        y: 96,
        size: 40,
        delay: 1,
        duration: 5.7,
        icon: ICONS[7],
      },
    ];
  }, []);

  const getNode = (id: number) => nodes.find((n) => n.id === id)!;

  if (!mounted) {
    return (
      <div className="relative h-[560px] w-full overflow-hidden rounded-[32px]" />
    );
  }

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[640px] overflow-hidden rounded-[32px]">
      {/* Ambient background */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
        animate={{ rotate: -360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* SVG Network */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {CONNECTIONS.map((connection, index) => {
          const from = getNode(connection.from);
          const to = getNode(connection.to);

          return (
            <motion.line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(34,211,238,0.22)"
              strokeWidth="0.35"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.15, 0.7, 0.15],
              }}
              transition={{
                duration: 2.2,
                delay: index * 0.08,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          );
        })}
      </svg>

            {/* Network Nodes */}
            {nodes.map((node) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size,
              marginLeft: -(node.size / 2),
              marginTop: -(node.size / 2),
            }}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-400/30"
              animate={{
                scale: [1, 1.8],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 2.8,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Secondary Ring */}
            <motion.div
              className="absolute inset-[-6px] rounded-full border border-cyan-300/10"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Node Body */}
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-cyan-400/25 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.18)]">
              <Icon
                className="text-cyan-300"
                size={Math.max(18, node.size * 0.38)}
                strokeWidth={1.8}
              />
            </div>
          </motion.div>
        );
      })}

            {/* Data packets travelling through the network */}
            {CONNECTIONS.map((connection, index) => {
        const from = getNode(connection.from);
        const to = getNode(connection.to);

        return (
          <motion.div
            key={`packet-${index}`}
            className="absolute"
            style={{
              left: `${from.x}%`,
              top: `${from.y}%`,
              marginLeft: -4,
              marginTop: -4,
            }}
            animate={{
              left: [`${from.x}%`, `${to.x}%`],
              top: [`${from.y}%`, `${to.y}%`],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4 + (index % 3) * 0.35,
              delay: index * 0.18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
          </motion.div>
        );
      })}

      {/* Central intelligence core */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />

        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-300/30"
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-[10px] rounded-full border border-cyan-400/20"
          animate={{ rotate: -360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/90 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <BrainCircuit
            className="text-cyan-300"
            size={34}
            strokeWidth={1.8}
          />
        </div>
      </motion.div>

            {/* Orbiting particles */}
            {Array.from({ length: 18 }).map((_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 170;

        return (
          <motion.div
            key={`orbit-${index}`}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300/80"
            style={{
              marginLeft: -3,
              marginTop: -3,
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI * 2) * radius,
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI * 2) * radius,
              ],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 12 + (index % 6),
              delay: index * 0.15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.45) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.45)_70%,rgba(2,6,23,0.95)_100%)]" />

            {/* Edge glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-cyan-400/10" />

{/* Corner highlights */}
<div className="pointer-events-none absolute left-6 top-6 h-12 w-12 rounded-full bg-cyan-400/10 blur-2xl" />
<div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 rounded-full bg-blue-500/10 blur-3xl" />
</div>
);
}