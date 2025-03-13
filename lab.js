import Hypercore from 'hypercore'

const core = new Hypercore('./directory')

; (async () => {

  // get block #42
  await core.append(Buffer.from('I am a block of data'))
  const block = await core.get(core.length)
  console.log(block)
  
  // simple call append with a new block of data
})().then(console.log)