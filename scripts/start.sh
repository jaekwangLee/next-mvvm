echo "------------------"
echo "run build"
echo "------------------"
echo ""
npm run build


echo "------------------"
echo "start next server"
echo "------------------"
echo ""
pm2 start npm --name 'next' -- start