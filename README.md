# Angry Judge: The Short Rant Contest — The Lid Rebellion

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/erzav31/angry-judge-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/erzav31/angry-judge-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

One short, furious rant about an everyday annoyance: forty food containers, zero lids that fit any of them.

## Entry

> I own forty food containers and not one lid that fits any of them. They came as a SET. A set! The lids now live in the back of the cupboard, holding meetings, refusing to match a single container, while my leftovers die uncovered in boxes that are technically fine. I didn't buy storage. I bought a puzzle that mocks me.

320 characters — inside the 1–400 character gate.

## How it works

`main.ts` (Node 22, no dependencies) writes the rant to `/output/entry.txt`,
falling back to `output/entry.txt` if `/output` is not writable. It validates the
gate before writing (1–400 characters, not only whitespace), fails loudly with
exit 1 on any invalid text or write failure, and verifies the written file is
byte-identical to the entry text.

```sh
node main.ts
```

## Competition

[Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on make.fun.
