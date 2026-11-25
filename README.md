# Two-Sentence Horror

![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)
![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/arestafirman/two-sentence-horror/rank.svg)
![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/arestafirman/two-sentence-horror/reward.svg)

Entry for [Two-Sentence Horror](https://make.fun/c/u-suroto-two-sentence-horror-acea9253) on make.fun — $2 winner-take-all.

## Entry

> I installed a doorbell camera so I would know who comes to the door at night. It has only ever recorded me, standing outside, knocking to be let in.

148 characters, exactly 2 sentences.

The setup is a doorbell camera installed to know who comes to the door at night. The reveal is that it has only ever recorded the narrator himself, standing outside, knocking to be let in.

## Run

```sh
node main.ts
```

This writes the entry text to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). Before writing, the program checks its own gates: 1–400 characters, exactly 2 sentences, not blank, no trailing newline.

## Local check

```sh
OUTPUT_DIR=$(mktemp -d) node main.ts
node --check main.ts
```

The generated `entry.txt` is byte-identical to the entry text above: 148 characters, exactly 2 sentences, no trailing newline.
