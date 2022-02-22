import App from './App';
import React from 'react';
//import renderer from 'react-test-renderer';
import { mount,render,shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddPatient from './components/AddPatient';



test('two plus two is four',()=>{
    expect(2+2).toBe(4);
  });

  test ("check app comes without any issue",()=>{
    shallow(<App/>);
  });
  
  configure({adapter:new Adapter()});
test('App renders without any issues',()=>{
  shallow(<App/>);
});

test('App has 1 h1 elements',()=>{
    const wrapper= shallow(<AddPatient/>);
    const h1ElementsArrLength= wrapper.find('h1').length;
     console.log("No of h1 elements in App is" + h1ElementsArrLength); 
    expect(h1ElementsArrLength).toEqual(1);
  });