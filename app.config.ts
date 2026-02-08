export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'slate'
    },
    select: {
      slots: {
        base: 'backdrop-blur-lg bg-white/20 border border-white/30 text-white focus-visible:outline-none focus-visible:ring-2 focus:ring-primary',
        placeholder: 'text-white/70',
        leadingIcon: 'text-white',
        trailingIcon: 'text-white',
        content: 'bg-black/90 backdrop-blur-lg',
        item: 'text-white hover:bg-white/10',
        itemLeadingIcon: 'text-white'
      },
      defaultVariants: {
        variant: 'outline',
        size: 'md'
      }
    }
  }
})
