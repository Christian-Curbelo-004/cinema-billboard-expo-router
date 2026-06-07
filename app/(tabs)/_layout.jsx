import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="allMovies" options={{ title: 'All Movies' }} />
      <Tabs.Screen name="byCategories" options={{ title: 'By Categories' }} />
    </Tabs>
  );
}