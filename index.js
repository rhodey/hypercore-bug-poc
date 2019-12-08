const mini      = require('minimist')
const ram       = require('random-access-memory')
const hypercore = require('hypercore')

let argv = mini(process.argv.slice(2))
let opts = Object.assign({}, { msg : 'howdy', idx : 0 }, argv)
let core = hypercore(() => ram())

core.once('error', (err) => {
  console.error(err)
  process.exit(1)
})

core.once('ready', () => {
  core.append(opts.msg, (err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }
    core.get(opts.idx, (err2, buf) => {
      console.log('error', err2, opts.idx, '=>', buf)
      core.close()
    })
  })
})
