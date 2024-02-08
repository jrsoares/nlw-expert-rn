import {View, FlatList} from "react-native";
import { useState } from "react";
import { CATEGORIES } from "@/utils/data/products"
import {Header} from "@/components/header";
import {CategoryButton} from "@/components/category-button";

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)
    }
    return (
        <View className={`flex-1 pt-8`}>
            <Header title={`Faça seu pedido`} />
            <FlatList className={`max-h-10 mt-5`}
                      data={CATEGORIES} renderItem={({item})=> <CategoryButton title={item} onPress={() => handleCategorySelect(item)} isSelected={item === category}/>}
                      keyExtractor={(item) => item}
                      horizontal
                      contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
                      showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}