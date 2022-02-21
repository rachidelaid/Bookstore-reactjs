import './Form.css';

const Form = () => (
  <section className="form">
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" required />
      <select>
        <option disabled selected>
          Category
        </option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="horror">Horror</option>
        <option value="fiction">Fiction</option>
        <option value="classics">Classics</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
