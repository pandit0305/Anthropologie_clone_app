import React from 'react'
import { Sneakers } from '../../../../db';
import { Box, Text,  Image } from "@chakra-ui/react";


import { single_page_data } from "../../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import { get_sneaker_success } from "../../../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function SneakerCard() {

  const dispatch = useDispatch();

  const { sneakerData } = useSelector((state) => {
    return {
      sneakerData: state.AppReducer.sneakerData,
    };
  });

  const singlePageHandler = (item) => {
    dispatch(single_page_data(item));
  };
  useEffect(() => {
    dispatch(get_sneaker_success(Sneakers));
  }, []);
  return (
    <>
             <Box
         display={"grid"}
         rowGap="15px"
         minH={"auto"}
         minW="auto"
         gridTemplateColumns={{
           lg:"repeat(4,1fr)",
           base:"repeat(1,1fr)",
           md: "repeat(3, 1fr)",
           sm:"repeat(2,1fr)"
         }}
         mt="30px"
            >
      {sneakerData.length > 0 &&
          sneakerData.map((ele) => (
            <Link to={`/shop/${ele.id}`}>
         <Box
                // w={"233.203px"}
                h="470.969px"
                minHeight={"auto"}
                cursor="pointer"
                width={"243.484px"}
                minW="auto"
                minH={"auto"}
                onClick={() => singlePageHandler(ele, ele.id)}
                key={ele.id + Math.random()}
              >
                <Image w={"auto"} h="349.469px" src={ele.image} />
                <Text width={"240px"}>{ele.name}</Text>
                <Text>${ele.price}</Text>
              </Box> 
            </Link>
          ))}
            </Box> 
    </>
  )
}

export default SneakerCard
