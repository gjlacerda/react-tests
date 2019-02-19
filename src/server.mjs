import express from 'express'
import path from 'path'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use('/', express.static(path.resolve('dist')));

app.get('/*', (req, res) => res.sendFile(path.resolve('dist/index.html')))

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`)
})