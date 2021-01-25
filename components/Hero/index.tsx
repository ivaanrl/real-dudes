import { x } from '@xstyled/styled-components';
import Image from 'next/image';

export const Hero = () => {
  return (
    <x.div
      width="100%"
      h="100vh"
      overflow="hidden"
      position="relative"
      px="200px"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <x.div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt="110px"
      >
        <x.p fontSize="270px" color="white">
          WELCOME
        </x.p>
        <x.p fontSize="144px" mt="-50px" color="white">
          TO LUXURY
        </x.p>
      </x.div>

      <x.div position="absolute" bottom={90} overflow="hidden">
        <x.div
          position="absolute"
          bottom={5}
          left={0}
          zIndex={1}
          w="65%"
          pr="20%"
          py="25px"
          pl="40px"
          h="47%"
          style={{
            background:
              'linear-gradient(60deg, rgba(0,0,0,0.65) 67%, rgba(255,255,255,0) 67%)',
          }}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <x.p color="white" fontSize="48px" pr="15%">
            ENJOY YOURSELF TO THE FULLEST
          </x.p>
          <x.p
            color="white"
            fontSize="18px"
            lineHeight="24px"
            fontFamily="Inter"
          >
            We ain’t judging. Merely a provider of a needs to an end. If you’re
            lookin’ for something, then perhaps you’ve come to the right place.
          </x.p>
          <x.button
            border="1px solid"
            borderColor="primary-button-stroke"
            color="white"
            backgroundImage="gradient-to-r"
            gradientFrom="primary-button-initial-bg"
            gradientTo="primary-button-final-bg"
            fontSize="18px"
            py="10px"
            maxWidth="60%"
            borderRadius="4px"
          >
            VISIT THE STORE
          </x.button>
        </x.div>
        <x.div
          position="absolute"
          top={0}
          bottom={6}
          left={0}
          right={0}
          bg="transparent"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.5)"
        />
        <Image height={720} width={1280} src="/images/hero/Hero_1.png" />
      </x.div>
      <x.div
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={-1}
        opacity="0.3"
      >
        <Image layout="fill" src="/images/hero/Hero_BG_image.png" />
      </x.div>
      <x.div
        position="absolute"
        top={0}
        bottom={0}
        left={200}
        right={200}
        zIndex={-2}
        opacity="0.95"
        style={{
          filter: 'saturate(150%)',
        }}
      >
        <Image layout="fill" src="/images/hero/Hero_BG_orange.png" />
      </x.div>
      <x.div position="absolute" bottom={30}>
        <x.button
          h="4px"
          w="40px"
          bg="primary-button-stroke"
          mr="20px"
          borderRadius="4px"
        />
        <x.button h="4px" w="40px" bg="white" mr="20px" borderRadius="4px" />
        <x.button h="4px" w="40px" bg="white" mr="20px" borderRadius="4px" />
        <x.button h="4px" w="40px" bg="white" mr="20px" borderRadius="4px" />
        <x.button h="4px" w="40px" bg="white" mr="20px" borderRadius="4px" />
      </x.div>
    </x.div>
  );
};
