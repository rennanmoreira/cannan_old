<template>
	<v-container  class="ml-auto mr-auto">
		<v-row class="text-center">
			<v-col cols="12">
				<v-sheet
					color="grey lighten-4"
					class="pa-3"
					v-if="currentListTasksLoading"
				>
					<v-skeleton-loader
						class="mx-auto"
						max-width="300"
						type="card"
					></v-skeleton-loader>
				</v-sheet>
				<v-list two-line>
					<v-list-item-group
						v-model="selected"
						active-class="pink--text"
						multiple
					>
						<template v-for="(item, index) in currentListTasks">
							<v-list-item :key="item.id">
								<template v-slot:default="{ active }">
									<v-list-item-content>
										<v-list-item-title class="d-flex" v-text="item.name"></v-list-item-title>

										<v-list-item-subtitle class="d-flex text--primary">Status: {{item.status.status}} - Atualiazado em {{item.date_updated_normalized}}</v-list-item-subtitle>

										<v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
									</v-list-item-content>

									<v-list-item-action>
										<!-- <v-list-item-action-text >Finalizar</v-list-item-action-text> -->

										<v-icon
											v-if="!active"
											color="grey lighten-1"
										>
											mdi-star-outline
										</v-icon>

										<v-icon
											v-else
											color="yellow darken-3"
										>
											mdi-star
										</v-icon>
									</v-list-item-action>
								</template>
							</v-list-item>

							<v-divider
								v-if="index < currentListTasks.length - 1"
								:key="index"
							></v-divider>
						</template>
					</v-list-item-group>
				</v-list>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: 'HelloWorld',

	data: () => ({
		selected: [],
		timezoneOptions: {
			year: 'numeric', month: 'numeric', day: 'numeric',
			hour: 'numeric', minute: 'numeric', second: 'numeric',
			hour12: false,
		}
	}),

	computed: {
		currentList() { return this.$store.state.lists.currentList },
		currentListTasks() {
			const currentListTasks = this.$store.state.lists.currentListTasks
			console.log('teste: ', currentListTasks)

			if (!currentListTasks) return []

			return currentListTasks.map(i => ({ ...i, lastUpdatedDate: this.normalizeDatetime(i.date_updated) }))
		},
		currentListLoading() { return this.$store.state.lists.loading.currentList },
		currentListTasksLoading() { return this.$store.state.lists.loading.currentListTasks }
	},
	methods: {
		normalizeDatetime(datetime) {
			return new Intl.DateTimeFormat('pt-BR', this.timezoneOptions).format(datetime)
		}
	}
}
</script>