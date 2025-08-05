import React from 'react';

function YoutubeForm() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <br />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" />
        <br />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
