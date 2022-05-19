import { createGlobalStyle } from 'styled-components';
import JosefinSansRegular from './JosefinSansRegular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Josefin Sans', sans-serif;
        src: local('Josefin Sans'),
        url(${JosefinSansRegular}) format('truetype') format('opentype');
    }
`;

