# twitter-fifo

Command line Twitter client that enables interacting with Twitter via named pipes.

## Usage

### Install

```
npm install -g twitter-fifo
```

### Setup

Copy `example_config.js` to `config.js` and fill in your Twitter API
credentials.

### Usage

```
$ mkdir my-twitter-working-dir

$ cd my-twitter-working-dir

$ twitter-fifo &

$ cat @noffle/timeline
@ragzouken: aaaa http://t.co/wgoHdlAVgf
@ragzouken: hint for this boss "try to save your magic for healing, you'll need
it!" hm well i hope they do less than 6 damage per turn
@GamingInColor: RT @GaymerX: game review commenters: stayin' classy since 1998
http://t.co/5xfKrzIkFC
...
```

## Limitations

Currently only the `timeline` pipe is available. Coming soon:

 * Tweeting by writing to a `tweet` file
 * `following` and `followers` files
 * More! File an issue or send a pull request!

