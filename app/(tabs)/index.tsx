import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#006633', dark: '#004d26' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
          contentFit="contain"
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">📚 Biblioteca IFMA</ThemedText>
      </ThemedView>

      <ThemedView style={styles.profileCard}>
        <ThemedText style={styles.name}>
          Maria Clara Barros Magalhães
        </ThemedText>

        <ThemedText style={styles.course}>
          Informática 2024
        </ThemedText>

        <ThemedText style={styles.quote}>
          Ler livros é a melhor forma de aprender algo novo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">
          📖 As Crônicas de Nárnia
        </ThemedText>

        <ThemedText style={styles.author}>
          Autor: C. S. Lewis
        </ThemedText>

        <Image
          source={{
            uri: 'https://harpercollins.com.br/cdn/shop/files/9786560051959_f7c24963-6dd6-41c9-bdba-739f5e4cbec5.jpg?v=1781712870&width=350',
          }}
          style={styles.bookImage}
          contentFit="cover"
        />
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">
          📖 Livro do Desassossego
        </ThemedText>

        <ThemedText style={styles.author}>
          Autor: Fernando Pessoa
        </ThemedText>

        <Image
          source={{
            uri: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9786559215621/livro-do-desassossego-edicao-revista-e-atualizada.jpg',
          }}
          style={styles.bookImage}
          contentFit="cover"
        />
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">
          📖 A Hora da Estrela
        </ThemedText>

        <ThemedText style={styles.author}>
          Autor: Clarice Lispector
        </ThemedText>

        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/I/61TaHURu27L._SL1000_.jpg',
          }}
          style={styles.bookImage}
          contentFit="cover"
        />
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: '#F2F8F2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  course: {
    fontSize: 16,
    color: '#006633',
    marginBottom: 10,
    fontWeight: '600',
  },

  quote: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  card: {
    backgroundColor: '#F2F8F2',
    padding: 15,
    marginBottom: 20,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
  },

  author: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
  },

  bookImage: {
    width: 180,
    height: 270,
    alignSelf: 'center',
    borderRadius: 10,
  },
});