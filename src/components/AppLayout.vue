<template>
	<header>
		<slot name="header"></slot>
	</header>
	<slot>If not content provided you will see this</slot>
	<footer>
		<slot name="footer"></slot>
	</footer>
</template>
<script>
export default {
 
 name: 'AppLayout',
 
}
</script>
