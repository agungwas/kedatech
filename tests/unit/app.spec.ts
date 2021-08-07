import { mount } from '@vue/test-utils'
import App from '@/App.vue';

describe('App Component', () => {
  const prop = [
    'sedang',
    'di',
    'coba'
  ]
  const wrapper = mount(App, {
    propsData: {
      labels: prop
    },
  })

  it('props length is 3', () => {
    expect(prop.length).toBe(3)
  })

  it('component mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('radio button must have same length with props length', () => {
    expect(wrapper.findAll('input').length).toBe(prop.length)
  })

  it('radio button must have same value and labels with prop', () => {
    const radioButtons = wrapper.findAll('input[type=radio]')
    const radioLabels = wrapper.findAll('input[type=radio] + label')
    for (let a = 0; a < prop.length; a++) {
      expect(radioLabels.at(a).element.innerHTML).toBe(prop[a])
      expect(radioButtons.at(a).element.getAttribute('value')).toBe(prop[a])
    }
  })

  it('component props match', () => {
    expect(wrapper.props().labels).toEqual(prop)
  })
})