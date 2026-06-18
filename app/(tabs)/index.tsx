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
          source={{
            uri: 'https://images.even3.com/zh7vbB-Kca5BMNnS71YK1GD9qOU=/1100x440/smart/https://static.even3.com/banner/BANNEREVEN3.a251c4d5270742d4a04b.png',
          }}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">📚 Biblioteca IFMA</ThemedText>
      </ThemedView>

      <ThemedText style={styles.description}>
        Confira alguns livros disponíveis na Biblioteca IFMA.
      </ThemedText>

      {/* Livro 1 */}
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
        />
      </ThemedView>

      {/* Livro 2 */}
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
        />
      </ThemedView>

      {/* Livro 3 */}
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
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  description: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
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

  headerImage: {
    width: '100%',
    height: '100%',
  },
});