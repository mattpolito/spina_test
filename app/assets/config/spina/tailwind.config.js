module.exports = {
  content: [
    '/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.11.0/app/views/**/*.*',
'/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.11.0/app/components/**/*.*',
'/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.11.0/app/helpers/**/*.*',
'/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.11.0/app/assets/javascripts/**/*.js',
'/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.11.0/app/**/application.tailwind.css',
'/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-pro-0.8.0/app/views/**/*.*',
'/Users/mattpolito/.asdf/installs/ruby/3.1.1/lib/ruby/gems/3.1.0/gems/spina-pro-0.8.0/app/components/**/*.*'
  ],
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography')
  ]
}
