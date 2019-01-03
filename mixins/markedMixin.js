import marked from 'marked'

export default {
  methods: {
    parse(md) {
      return marked(md)
    }
  }
}
