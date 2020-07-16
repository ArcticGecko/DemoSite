using System;
using System.Collections.Generic;
using Portfolio.Controllers;
using Portfolio.Interfaces;
using Portfolio.Utils;

namespace Portfolio.Models.Components
{
	using ComparisonItem = Dictionary<byte, IComparisonValue>;
	using ComparisonRow = Tuple<string, ComparisonValueType>;

	public class ComparisonSession
	{
		public ComparisonSession()
		{
			byte[] ids = new byte[255];
			for (byte i = 0; i < byte.MaxValue; i++)
			{
				ids[i] = i;
			}

			this._itemIds = new Queue<byte>(ids);
			this._rowIds = new Queue<byte>(ids);
			this.Rows = new Dictionary<byte, ComparisonRow>();
			this.Items = new Dictionary<byte, ComparisonItem>();
			this.Size = 0;
		}

		/// <summary>
		/// Stores the unused comparison item ids.
		/// </summary>
		private Queue<byte> _itemIds;

		/// <summary>
		/// Stores the unused row ids.
		/// </summary>
		private Queue<byte> _rowIds;

		public long Size { get; private set; }

		public Dictionary<byte, ComparisonRow> Rows { get; private set; }

		public Dictionary<byte, ComparisonItem> Items { get; private set; }

		/// <summary>
		/// Adds a new row to the comparison session.
		/// </summary>
		/// <param name="name">The name of the row.</param>
		/// <param name="type">The type of the row.</param>
		/// <returns>The id of the new row.</returns>
		public byte AddRow(string name, ComparisonValueType type)
		{
			byte rowId = this._rowIds.Dequeue();
			Tuple<string, ComparisonValueType> rowValue = new ComparisonRow(name, type);
			this.Rows.Add(rowId, rowValue);
			return rowId;
		}

		/// <summary>
		/// Removes a row from the comparison session.
		/// </summary>
		/// <param name="rowId">The id of the row to remove.</param>
		public void RemoveRow(byte rowId)
		{
			if (!this._rowIds.Contains(rowId))
			{
				foreach (var list in this.Items)
				{
					list.Value.Remove(rowId);
				}

				this.Rows.Remove(rowId);
				this._rowIds.Enqueue(rowId);
			}
		}

		/// <summary>
		/// Adds a new item to the list to compare.
		/// </summary>
		/// <returns>The id of the new item.</returns>
		public byte AddItem()
		{
			byte itemId = this._itemIds.Dequeue();
			ComparisonItem newList = new ComparisonItem();
			this.Items.Add(itemId, newList);
			return itemId;
		}

		/// <summary>
		/// Removes an item from the comparison session.
		/// </summary>
		/// <param name="itemId">The id of the item to remove.</param>
		public void RemoveItem(byte itemId)
		{
			if (!this._itemIds.Contains(itemId))
			{
				this.Items.Remove(itemId);
				this._itemIds.Enqueue(itemId);
			}
		}

		/// <summary>
		/// Sets a value.
		/// </summary>
		/// <param name="itemId">The id of the item to update.</param>
		/// <param name="rowId">The value of the row to update.</param>
		/// <param name="value">The value to set.</param>
		public void SetValue(byte itemId, byte rowId, IComparisonValue value)
		{
			if (!this._itemIds.Contains(itemId))
				if (!this._rowIds.Contains(rowId))
				{
					IComparisonValue oldValue;
					if (this.Items.TryGetValue(itemId, out ComparisonItem item))
						if (item.TryGetValue(rowId, out oldValue))
						{
							this.Size -= oldValue.Value.GetSize();
						}

					this.Size += value.Value.GetSize();
					this.Items[itemId][rowId] = value;
				}
		}
	}
}