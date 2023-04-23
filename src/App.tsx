import {Button, defaultTheme, Flex, Heading, Provider, View} from '@adobe/react-spectrum';

export function App() {
  return (
    <Provider theme={defaultTheme} colorScheme='dark' minHeight="100vh">
      <View>
        <Flex direction="column" maxWidth="1200px" gap="size-300" margin="0 auto">
          <View>
            <Heading level={1}>Hello React Spectrum!</Heading>
            <Button
              variant="accent"
              onPress={() => alert('Hey there!')}
            >
              Hello React Spectrum!
            </Button>
          </View>
        </Flex>
      </View>
    </Provider>
  );
}
