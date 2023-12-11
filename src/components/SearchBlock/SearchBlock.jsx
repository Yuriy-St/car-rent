import { Container } from '../Container';

export const SearchBlock = () => (
  <>
    <Container>
      <div>
        <select>Car brand</select>
        <select>Price/ 1 hour</select>
        <div>
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>
        <button type="button">Search</button>
      </div>
    </Container>
  </>
);
