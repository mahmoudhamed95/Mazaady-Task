import { shallowMount } from '@vue/test-utils';
import FormTask from '@/components/form/FormTask.vue';

// Mock PrimeVue components
jest.mock('primevue/dropdown', () => ({
  template: '<div></div>',
  name: 'Dropdown',
}));

jest.mock('primevue/inputtext', () => ({
  template: '<input />',
  name: 'InputText',
}));

// Mock axios module
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('FormTask.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FormTask);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

});
