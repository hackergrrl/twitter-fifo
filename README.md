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
@andmish: making new set for new level #gamedev #unity3d
@nodeschool: NodeSchool International Day and new workshops on npm and ES6 generators
...
```

