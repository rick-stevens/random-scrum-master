import { bold, green, white, cyan } from 'https://deno.land/std/fmt/colors.ts';

console.log(cyan(`
  ┌────────────────────────────────────┐
  │                                    │
  │   SCRUM MASTER GENERATOR 9000 🦕   │
  │                                    │
  └────────────────────────────────────┘
`));

await new Promise(resolve => setTimeout(resolve, 3000));
console.log(bold(`De ${Deno.args.length} kanshebbers voor komende sprint zijn: ${green(Deno.args.join(white(', ')))}\n`));
await new Promise(resolve => setTimeout(resolve, 3000));
console.log(bold('En de gelukkige nieuwe scrum master wordt...\n'));
await new Promise(resolve => setTimeout(resolve, 4000));
console.log(bold(`...${green(Deno.args[Math.floor(Math.random() * Deno.args.length)])}!\n`));
