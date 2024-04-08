import { html } from 'lit';
import '../src/example-event.js';

export default {
  title: 'ExampleEvent',
  component: 'example-event',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <example-event
      style="--example-event-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </example-event>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
